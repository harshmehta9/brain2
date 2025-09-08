import Content from "../models/content";
import { Request, Response } from "express";
import { IContent } from "../types/alltypes";
import Tags from "../models/tags";

export const createContent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { link, photourl, title, tags, note } = req.body;
        const userInfo = (req as any).user;

        if (!link || !photourl || !title || !tags || note === undefined) {
            res.status(400).json({ success: false, message: "One of the parameter is missing" });
            return;
        }
        let tagid = "";

        const existing = await Tags.findOne({ title: tags});

        if(existing){
            tagid = existing._id as string;
        }else{
            const newtag = {
                title: tags,
                color: null
            }

            const created = await Tags.create(newtag)
            tagid = created._id as string
            
        }

        const content = {
            link,
            photourl,
            title,
            tags: tagid,
            note,
            userId: userInfo._id
        };

        const created = await Content.create(content);
        res.status(201).json({ success: true, data: created });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const updateContent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const userInfo = (req as any).user;
        if (!id) {
            res.status(400).json({ success: false, message: "Content id is required" });
            return;
        }

        

        const { link, photourl, title, tags, note } = req.body;

        if (link === undefined && photourl === undefined && title === undefined && tags === undefined && note === undefined) {
            res.status(400).json({ success: false, message: "At least one field must be provided to update" });
            return;
        }

        let tagid = "";

        const existingTag = await Tags.findOne({ title: tags});

        if(existingTag){
            tagid = existingTag._id as string;
        }else{
            const newtag = {
                title: tags,
                color: null
            }

            const created = await Tags.create(newtag)
            tagid = created._id as string
            
        }

        

        const existing = await Content.findById(id);
        if (!existing) {
            res.status(404).json({ success: false, message: "Content not found" });
            return;
        }

        if (userInfo?._id && existing.userId?.toString() !== userInfo._id.toString()) {
            res.status(403).json({ success: false, message: "Not authorized to update this content" });
            return;
        }

        const updates: Partial<IContent> = {};
        if (link !== undefined) updates.link = link;
        if (photourl !== undefined) updates.photourl = photourl;
        if (title !== undefined) updates.title = title;
        if (tags !== undefined) updates.tags = tagid;
        if (note !== undefined) updates.note = note;

        const updated = await Content.findByIdAndUpdate(id, updates, { new: true });
        res.status(200).json({ success: true, data: updated });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const deleteContent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const userInfo = (req as any).user;

        if (!id) {
            res.status(400).json({ success: false, message: "Content id is required" });
            return;
        }

        const existing = await Content.findById(id);
        if (!existing) {
            res.status(404).json({ success: false, message: "Content not found" });
            return;
        }

        if (userInfo?._id && existing.userId?.toString() !== userInfo._id.toString()) {
            res.status(403).json({ success: false, message: "Not authorized to delete this content" });
            return;
        }

        await Content.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Content deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const shareContent = async (req: Request, res: Response) => {
    const { ids } = req.body;
    console.log(ids);
    res.status(200).json({ success: true, ids });
};
