import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const {currentLocale, defaultLocale} = i18n;
  
  // Redirect to introduction page with proper locale handling
  const basePath = currentLocale === defaultLocale ? '' : `/${currentLocale}`;
  return <Redirect to={`${basePath}/introduction`} />;
}
