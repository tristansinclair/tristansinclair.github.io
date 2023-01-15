import PostType from "../interfaces/posts";
import { formatDate } from "../lib/formatDate";
import { Card } from "./Card";

// export function Newsletter({ data }: { data: PostType }) {
//   return (
//     <article className="md:grid md:grid-cols-4 md:items-baseliner">
//       <Card className="md:col-span-3">
//         <Card.Title href={`archive/${data.slug}`}>{data.title}</Card.Title>
//         <Card.Eyebrow
//           as="time"
//           dateTime={data.date}
//           className="md:hidden"
//           decorate
//         >
//           {formatDate(data.date)}
//         </Card.Eyebrow>
//         <Card.Cta>Read article</Card.Cta>
//       </Card>
//       <Card.Eyebrow
//         as="time"
//         dateTime={data.date}
//         className="mt-1 hidden md:block"
//       >
//         {formatDate(data.date)}
//       </Card.Eyebrow>
//     </article>
//   );
// }

export function Newsletter({ data }: { data: PostType }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/archive/${data.slug}`}>{data.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={data.date}
          className="md:hidden"
          decorate
        >
          {formatDate(data.date)}
        </Card.Eyebrow>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={data.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(data.date)}
      </Card.Eyebrow>
    </article>
  );
}
