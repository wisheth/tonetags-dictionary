export interface IToneTag {
  url: string;
  frontmatter: {
    tag: string;
    fullForm: string;
    addedBy: string;
    draft?: boolean;
  };
}