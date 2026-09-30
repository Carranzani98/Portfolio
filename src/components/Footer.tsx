export default function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
      © {new Date().getFullYear()} {name}. All rights reserved.
    </footer>
  );
}