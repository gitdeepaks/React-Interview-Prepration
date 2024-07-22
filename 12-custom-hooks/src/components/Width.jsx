import { useWindow } from "../hooks/useWindow";

export default function Width() {
  const { width, height } = useWindow();

  return (
    <>
      <div className="">
        width:{width} height:{height}
      </div>
    </>
  );
}
