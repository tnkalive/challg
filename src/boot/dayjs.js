import { boot } from "quasar/wrappers";
import dayjs from "dayjs";
import locale_th from "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale(locale_th);
dayjs.extend(buddhistEra);
dayjs.extend(duration)
dayjs.extend(relativeTime)


export default boot(() => { });

export { dayjs };
