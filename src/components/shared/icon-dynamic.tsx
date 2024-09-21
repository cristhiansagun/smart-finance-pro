import dynamic from 'next/dynamic';
import type Lucide from 'lucide-react';

export type IconDynamicNames = keyof typeof Lucide.icons;
interface IconDynamicProps extends Lucide.LucideProps {
  name: IconDynamicNames;
}

const IconDynamic = ({ name, ...props }: IconDynamicProps) => {
  const LucideIcon = dynamic(() => import(`lucide-react`).then((mod) => mod[name]));

  return <LucideIcon {...props} />;
};

export default IconDynamic;
export type { IconDynamicProps };