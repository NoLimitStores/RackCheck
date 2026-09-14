import type { Block } from "@/lib/kennisbank";
import { Note } from "@/components/AnswerBox";

/** Rendert een reeks contentblokken binnen een .content-context. */
export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.t) {
          case "h2":
            return <h2 key={i}>{block.text}</h2>;
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "p":
            return <p key={i}>{block.text}</p>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ol>
            );
          case "note":
            return <Note key={i}>{block.text}</Note>;
          case "table":
            return (
              <div key={i} className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      {block.head.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
