export interface Props {
  tag: string;
  fullForm: string;
  addedBy: string;
  url: string;
}

export const ToneTag = ({
  tag,
  fullForm,
  addedBy,
  url,
}: Props) => {
  return (
    <a
      href={url}
      rel="prefetch"
      className="flex flex-col gap-y-3 hover:(no-underline bg-neutral-800) p-4 mb-8 transition-colors rounded-xl"
    >
      <h3 className="text-(uwuPink xl) md:text-2xl font-extrabold">{tag}</h3>

      <p className="text-sm md:text-base font-medium">{fullForm}</p>

      <div className="flex items-center gap-x-2 text-(neutral-200 xs) md:text-sm font-medium">
        <span>added by {addedBy}</span>
      </div>
    </a>
  );
};
