export default interface FeaturesData {
  id: number;
  icon?: JSX.Element;
  title: string;
  des: string;
}
export interface ItemsData {
  item: {
    title: string;
    des: string;
    icon?: JSX.Element;
  };
}
