import Image from "next/image";
import clsx from "clsx";

type CardProps = {
  update?: boolean;
};

export default function Card({ update }: CardProps) {
  return (
    <div
      className={clsx(
        "mt-40 flex flex-col gap-3 rounded-3xl border-2 border-gray-700",
        update ? "bg-neutral-800" : "bg-gray-900",
        "transition duration-500 ease-in-out",
      )}
    >
      <div className="flex flex-row gap-3">
        <Image
          className="rounded-l-3xl  object-cover"
          src="/images/image-4.jpg"
          alt=""
          width={200}
          height={200}
        />
        <div className="flex flex-col gap-10 p-4 leading-normal">
          <h5 className="mt-5 text-2xl font-bold tracking-tight text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
}
// {
//   /* <div className="card-container">
//         <div className="image-text-wrapper">
//           <Image
//             className="card-image"
//             src="/images/image-4.jpg"
//             alt=""
//             width={400}
//             height={400}
//           />
//           <div className="text-content">
//             <h5 className="card-title">
//               Noteworthy technology acquisitions 2021
//             </h5>
//             <p className="card-description">
//               Here are the biggest enterprise technology acquisitions of 2021 so
//               far, in reverse chronological order.
//             </p>
//           </div>
//         </div>
//       </div> */
// }
