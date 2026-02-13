import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';

interface NavButtonProps extends ButtonProps {
  href: string;
}

export const NavButton = ({ href, children}: NavButtonProps) => (
  <Button color="inherit" component={Link} href={href}>
    {children}
  </Button>
);