import { randomUUID } from "crypto";

interface UserProps {
  id?: string;
  name: string;
  email: string;
  phone: string;
}

export class UserEntity {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = props;
    if(!props.id) {
      this.props.id = randomUUID();
    }
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public set phone(phone: string) {
    this.props.phone = phone;
  }

  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }
  public get email() {
    return this.props.email;
  }
  public get phone() {
    return this.props.phone;
  }
}
