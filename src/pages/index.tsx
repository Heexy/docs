import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const {currentLocale} = i18n;
  
  // Redirect to introduction page with proper locale
  return <Redirect to={`/${currentLocale === 'en' ? '' : currentLocale + '/'}introduction`} />;
}
