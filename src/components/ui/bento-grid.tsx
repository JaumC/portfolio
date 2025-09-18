import { cn } from "../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 gap-4 md:auto-rows-[20px] md:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  short_description,
  header,
  stacks,
  icon,
  onPress,
}: {
  className?: string;
  title?: string | React.ReactNode;
  short_description?: string | React.ReactNode;
  header?: string;
  stacks?: string[];
  icon?: React.ReactNode;
  onPress?: () => void;
}) => {
  return (
    <div
      onClick={onPress}
      className={cn(
        "group/bento cursor-pointer bg-zinc-800/70 shadow-input lg:row-span-10 flex gap-6 flex-col justify-between rounded-xl p-4 transition duration-200",
        className,
      )}
    >
      <div className="rounded-lg z-25 w-full overflow-hidden relative bg-[#13162D] min-h-[100px] lg:min-h-[160px]">
        <div className="w-[35%] h-full blur-3xl absolute bg-radial-[at_30%_45%] right-50 from-blue-400 via-gray-400/40 to-emerald-800" />

        <img
          className="z-10 absolute inset-0 m-auto object-contain p-15 rotate-15"
          src={header}
          alt={header?.replace("/", "")}
        />
      </div>
      <div className="text-zinc-200 transition duration-200 group-hover/bento:translate-x-2 lg:gap-5 flex flex-col">
        <div>
          <div className="flex items-center gap-2">
            {icon}
            <div className="mt-2 mb-2 font-pixelify-sans text-lg">
              {title}
            </div>
          </div>
          <div className="font-sans text-xs font-bold text-zinc-400 text-[15px] hidden lg:block">
            {short_description}
          </div>
        </div>
        <div className="flex relative">
          {stacks?.map((stack, index) => {
            const [src, width] = stack.split(" ");
            return (
              <div
                key={index}
                style={{ marginLeft: index === 0 ? 0 : '-12px', zIndex: stacks.length - index }}
                className="w-[45px] h-[45px] relative border-2 border-[#363749] rounded-full bg-gradient-to-r from-zinc-900 to-[#0C0E23] flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={src.replace("/", "")}
                  style={{ width: width }}
                  className="absolute"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
