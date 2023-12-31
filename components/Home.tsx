"use client";
import Image from "next/image";
import Cover from "@/public/test.png";
import Link from "next/link";
import { openModel } from "@/redux/features/models/learnSlice";
import { useAppDispatch } from "@/hooks/reduxHooks";

const HomePage = () => {
  const dispatch = useAppDispatch();
  return (
    <section className="flex flex-col items-center gap-4 py-8">
      <Image width={300} height={300} src={Cover} alt="trial" />
      <h1 className="text-3xl text-center w-2/3 font-bold">The Sixth Sense</h1>
      <p className="text-center md:w-1/3 px-2">
        {` Want to test your sixth sense or luck in a simple fun game? Click "Learn" to check
        out the game instructions then give it a try!`}
      </p>
      <div className="flex flex-col items-center w-fit justify-evenly md:justify-center md:gap-4  mx-auto p-4">
        <div className="actions w-full flex gap-8">
          <Link href="/game" className="border p-4 hover:opacity-50 rounded-lg">
            Play Now
          </Link>
          <button
            onClick={() => dispatch(openModel())}
            className="border p-4 hover:opacity-50 rounded-lg"
          >
            Learn
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
