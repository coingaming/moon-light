import Link from "next/link";

export const QuickNav = ({ items }: { items: string[] }) => (
  <ul>
    {items.map((item) => (
      <li key={item}>
        <Link href={`#${item}`}>{item}</Link>
      </li>
    ))}
  </ul>
);
