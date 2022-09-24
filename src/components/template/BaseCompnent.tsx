import styles from './BaseComponent.module.scss';

export interface BaseComponentProps {
  example: string;
}

const BaseComponent = ({ example }: BaseComponentProps) => {
  return (
    <div className={styles.test}>
      <span>{example}</span>
    </div>
  );
};

export default BaseComponent;
