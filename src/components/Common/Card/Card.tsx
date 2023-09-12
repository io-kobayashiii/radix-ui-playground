import { classNames } from '@/features/classNames';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Card = ({ className, children }: Props) => {
  return (
    <div className={classNames('rounded-12 bg-white p-24', className)}>
      {children}
    </div>
  );
};
