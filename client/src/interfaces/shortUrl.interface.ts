export interface ShortUrlInterface{
    fullUrl: string;
}
export interface ShortUrlFormProps {
    addUrl: (url: ShortUrlInterface) => void;
  }
  