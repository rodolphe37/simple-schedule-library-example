import { CSSProperties } from "react";
import { useIntl } from "react-intl";

interface Props {
  id: string;
  style?: CSSProperties;
  values?: Record<string, string | number | null | undefined>;
}

const FormattedMessageText = ({ id, style, values, ...props }: Props) => {
  const intl = useIntl();
  const message = intl.formatMessage({ id }, values);

  return (
    <p style={style} {...props}>
      {(message + "").replace(/<br><\/br>/g, "\n")}
    </p>
  );
};

export default FormattedMessageText;
