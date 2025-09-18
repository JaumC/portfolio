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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[20px] md:grid-cols-3",
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
  header?: string | React.ReactNode;
  stacks?: string[];
  icon?: React.ReactNode;
  onPress?: () => void;
}) => {
  return (
    <div
      onClick={onPress}
      className={cn(
        "group/bento bg-zinc-800/70 shadow-input row-span-14 lg:row-span-9 flex flex-col justify-between rounded-xl p-4 transition duration-200",
        className,
      )}
    >
      <div className="rounded-lg p-2 bg-neutral-200">
        {typeof header === "string" ? (
          <img className="rounded" src={header} alt={header.replace("/", "")} />
        ) : (
          header
        )}
      </div>
      <div className="text-zinc-200 transition duration-200 group-hover/bento:translate-x-2 gap-5 flex flex-col">
        <div>
          <div className="flex items-center gap-4">
            {icon}
            <div className="mt-2 mb-2 font-pixelify-sans text-lg">
              {title}
            </div>
          </div>
          <div className="font-sans text-xs font-bold text-zinc-400 text-[15px]">
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
