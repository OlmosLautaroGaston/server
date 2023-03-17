import Content from "../models/Contents";

export const createContent = async (req, res) => {
  const {
    company,
    position,
    duration,
    responsabilities,
  } = req.body; //destructuring - obteniendo datos del body
  const newContent = new Content({
    company,
    position,
    duration,
    responsabilities,
  }); //asign schema
  const contentSaved = await newContent.save(); //post into db
  res.status(201).json(contentSaved); //codigo de estado objeto creado
};
export const getContents = async (req, res) => {
  const contents = await Content.find();
  res.status(200).json(contents);
};
export const getContentById = async (req, res) => {
  const content = await Content.findById(req.params.contentId);
  res.status(200).json(content);
};
export const updateContentById = async (req, res) => {
  const updatedContent = await Content.findByIdAndUpdate(
    req.params.contentId,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContent);
};
export const deleteContentById = async (req, res) => {
  const { contentId } = req.params;
  await Content.findByIdAndDelete(contentId);
  res.status(204).json();
};
