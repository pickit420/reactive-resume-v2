import { Trans } from "@lingui/react/macro";
import { cn } from "@/utils/style";

type Props = React.ComponentProps<"div">;

export function Copyright({ className, ...props }: Props) {
	return (
		<div className={cn("text-muted-foreground/80 text-xs leading-relaxed", className)} {...props}>
			<p>
				<Trans>
					Licensed under{" "}
					<a href="#" target="_blank" rel="noopener" className="font-medium underline underline-offset-2">
						MIT
					</a>
					.
				</Trans>
			</p>

			<p>
				<Trans>By the community, for the community.</Trans>
			</p>

			<p>
				<Trans>
					A passion project by{" "}
					<a
						target="_blank"
						rel="noopener"
						href="https://amruthpillai.com"
						className="font-medium underline underline-offset-2"
					>
						Amruth Pillai
					</a>
					.
				</Trans>
			</p>
			<p>
				<Trans>
					A project graciously adopted by{" "}
					<a href="https://github.com/sponsors/lazy-media" target="_blank" rel="noopener noreferrer nofollow">
						Lazy Media
					</a>{" "}
					<i>(because someone had to... barely)</i>.
				</Trans>
			</p>

			<p className="mt-4">Reactive Resume v{__APP_VERSION__}</p>
		</div>
	);
}
