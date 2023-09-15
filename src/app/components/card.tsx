import Image from "next/image";
import Button from "./button";
import clsx from "clsx";

type CardProps = {
  update?: boolean;
};

export default function Card({ update }: CardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3 mt-40  border-2 border-gray-700 rounded-3xl",
        update ? "bg-neutral-800" : "bg-gray-900",
        "transition ease-in-out duration-500"
      )}
    >
      <div className="flex flex-row gap-3">
        <Image
          className="object-cover  rounded-l-3xl"
          src="/images/image-4.jpg"
          alt=""
          width={200}
          height={200}
        />
        <div className="flex flex-col gap-10 p-4 leading-normal">
          <h5 className="text-2xl font-bold tracking-tight text-white mt-5">
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
