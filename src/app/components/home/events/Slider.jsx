export const SliderDot = ({ color = "bg-white" }) => (
  <button
    type="button"
    className={`cursor-pointer w-4 h-4 ${color}`}
  />
);

export default function Slider() {
  return (
    <div className="h-5 my-5 md:h-10 md:my-10 flex gap-3 justify-center">
      <SliderDot color="bg-white" />
      <SliderDot color="bg-white" />
      <SliderDot color="bg-accent" />
    </div>
  );
}
