export type ContactType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
};

export type ContactProps = {
  item: ContactType;
  index: number;
  handleContactPress: (id: number, checked: boolean) => void;
};

export type AvatarProps = {
  avatar: string | null;
  firstName: string;
  lastName: string;
};

export type LoadingProps = {
  size?: number;
  color?: string;
};
