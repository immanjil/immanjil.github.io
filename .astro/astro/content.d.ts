declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "blog";
  data: any;
  render(): Render[".md"];
}>;
"leetcode": {
"Leet-Coding-Monthly-Day1.md": {
	id: "Leet-Coding-Monthly-Day1.md";
  slug: "leet-coding-monthly-day1";
  body: string;
  collection: "leetcode";
  data: any
} & { render(): Render[".md"] };
"Leet-Coding-Monthly-Day10.md": {
	id: "Leet-Coding-Monthly-Day10.md";
  slug: "leet-coding-monthly-day10";
  body: string;
  collection: "leetcode";
  data: any
} & { render(): Render[".md"] };
"Leet-Coding-Monthly-Day11.md": {
	id: "Leet-Coding-Monthly-Day11.md";
  slug: "leet-coding-monthly-day11";
  body: string;
  collection: "leetcode";
  data: any
} & { render(): Render[".md"] };
"Leet-Coding-Monthly-Day2.md": {
	id: "Leet-Coding-Monthly-Day2.md";
  slug: "leet-coding-monthly-day2";
  body: string;
  collection: "leetcode";
  data: any
} & { render(): Render[".md"] };
"Leet-Coding-Monthly-Day3.md": {
	id: "Leet-Coding-Monthly-Day3.md";
  slug: "leet-coding-monthly-day3";
  body: string;
  collection: "leetcode";
  data: any
} & { render(): Render[".md"] };
"Leet-Coding-Monthly-Day4.md": {
	id: "Leet-Coding-Monthly-Day4.md";
  slug: "leet-coding-monthly-day4";
  body: string;
  collection: "leetcode";
  data: any
} & { render(): Render[".md"] };
"Leet-Coding-Monthly-Day5.md": {
	id: "Leet-Coding-Monthly-Day5.md";
  slug: "leet-coding-monthly-day5";
  body: string;
  collection: "leetcode";
  data: any
} & { render(): Render[".md"] };
"Leet-Coding-Monthly-Day6.md": {
	id: "Leet-Coding-Monthly-Day6.md";
  slug: "leet-coding-monthly-day6";
  body: string;
  collection: "leetcode";
  data: any
} & { render(): Render[".md"] };
"Leet-Coding-Monthly-Day7.md": {
	id: "Leet-Coding-Monthly-Day7.md";
  slug: "leet-coding-monthly-day7";
  body: string;
  collection: "leetcode";
  data: any
} & { render(): Render[".md"] };
"Leet-Coding-Monthly-Day8.md": {
	id: "Leet-Coding-Monthly-Day8.md";
  slug: "leet-coding-monthly-day8";
  body: string;
  collection: "leetcode";
  data: any
} & { render(): Render[".md"] };
"Leet-Coding-Monthly-Day9.md": {
	id: "Leet-Coding-Monthly-Day9.md";
  slug: "leet-coding-monthly-day9";
  body: string;
  collection: "leetcode";
  data: any
} & { render(): Render[".md"] };
};
"system-design": {
"url-shortener-bitly.md": {
	id: "url-shortener-bitly.md";
  slug: "url-shortener-bitly";
  body: string;
  collection: "system-design";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
