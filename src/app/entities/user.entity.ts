import { randomUUID } from 'crypto';

export interface UserProps {
  id?: string;
  name: string;
  email: string;
  phone: string;
}

export class UserEntity {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = props;
    
    // Set ID if not passed as an argument
    this.props.id = props.id ? props.id : randomUUID();

    // Call setters
    this.name = props.name;
  }

  public set name(name: string) {
    if (name.length < 5) {
      throw new Error('The name must be at least 5 characters long');
    }
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
