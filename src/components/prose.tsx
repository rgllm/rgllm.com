export default function Prose({ children }: { children: React.ReactNode }) {
	return (
		<article className="prose max-w-none text-md leading-normal prose-headings:mt-5 prose-headings:mb-2 prose-headings:font-medium prose-headings:text-foreground prose-h1:hidden prose-h2:text-lg prose-h3:text-base prose-h4:text-sm prose-h5:text-xs prose-h6:text-[0.7rem] prose-p:text-foreground prose-p:mb-4 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-[0.75rem] prose-blockquote:border-l-primary prose-blockquote:bg-muted/10 prose-blockquote:px-3 prose-blockquote:py-1 prose-blockquote:rounded-r prose-ul:mb-4 prose-ol:mb-4 prose-li:mb-1 prose-hr:border-border prose-hr:my-4 prose-strong:text-foreground dark:prose-strong:text-white dark:text-white">
			{children}
		</article>
	)
}
