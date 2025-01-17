import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Variants, Transition } from 'framer-motion';

// Component Props
export interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface ValueCardProps {
  title: string;
  description: string;
  image: string;
}

export interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  children: ReactNode;
}

export interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  status: 'open' | 'coming' | 'closed';
  image: string;
  index: number;
}

export interface ContactInfoProps {
  title: string;
  info: string;
  icon: string;
  index: number;
}

export interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export type AnimationVariants = Variants;
export type MotionTransition = Transition;

export interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}