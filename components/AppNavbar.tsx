import Image from 'next/image';

export interface AppNavbarProps {
  owner: string;
}

export default function AppNavbar({owner}: AppNavbarProps) {
  return (
    <div className="flex justify-between content-center items-center">
      <div>
        <Image className="logo" src="/authouse.svg" width="50px" height="50px" alt="Authouse Logo" />
      </div>
      <div className="font-light">{ owner } 的 Authouse</div>
    </div>
  );
}
