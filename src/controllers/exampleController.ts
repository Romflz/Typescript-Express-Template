import { Request, Response } from "express";
import { getExample } from "../models/exampleModel";

export function getExamples(req: Request, res: Response) {
  const examples = getExample();
  res.json(examples);
}
