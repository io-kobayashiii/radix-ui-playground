import { classNames } from '@/features/classNames';

type Props = {
  text: string;
  className?: string;
};

export const CardHeading = ({ text, className }: Props) => {
  return (
    <div className={classNames(className)}>
      <h2 className={'text-20 font-bold'}>{text}</h2>
      <div className="mt-16 w-40 h-4 bg-orange-400" />
    </div>
  );
};
