
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const KNOWLEDGE_DIRECTORY = path.join(
  process.cwd(),
  "content",
  "knowledge"
);

export const knowledgeCategories = [
  "Corporate Governance",
  "Company Secretarial",
  "Trust Administration",
  "Beneficial Ownership",
  "Statutory Compliance",
  "Regulatory Updates",
] as const;

const dateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD.")
  .refine((value) => {
    const date = new Date(`${value}T00:00:00.000Z`);

    return (
      !Number.isNaN(date.getTime()) &&
      date.toISOString().startsWith(value)
    );
  }, "Enter a valid date.");

const articleMetadataSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.enum(knowledgeCategories),
  author: z.string().min(1),
  publishedAt: dateSchema,
  reviewedAt: dateSchema.optional(),
  status: z.enum(["draft", "published"]),
  references: z.array(z.string().url()).default([]),
});

export type ArticleMetadata = z.infer<
  typeof articleMetadataSchema
>;

export type KnowledgeArticle = ArticleMetadata & {
  slug: string;
  content: string;
};

export async function getAllArticles(): Promise<
  KnowledgeArticle[]
> {
  let files: string[];

  try {
    files = await fs.readdir(KNOWLEDGE_DIRECTORY);
  } catch (error) {
    if (
      error instanceof Error &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return [];
    }

    throw error;
  }

  const articleFiles = files.filter((file) =>
    file.endsWith(".mdx")
  );

  const articles = await Promise.all(
    articleFiles.map(async (file) => {
      const filePath = path.join(
        KNOWLEDGE_DIRECTORY,
        file
      );

      const source = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(source);

      const metadata = articleMetadataSchema.parse(data);

      return {
        ...metadata,
        slug: file.replace(/\.mdx$/, ""),
        content,
      };
    })
  );

  const today = new Date().toISOString().slice(0, 10);

  return articles
    .filter(
      (article) =>
        article.status === "published" &&
        article.publishedAt <= today
    )
    .sort((a, b) =>
      b.publishedAt.localeCompare(a.publishedAt)
    );
}

export async function getArticleBySlug(
  slug: string
): Promise<KnowledgeArticle | undefined> {
  const articles = await getAllArticles();

  return articles.find((article) => article.slug === slug);
}
