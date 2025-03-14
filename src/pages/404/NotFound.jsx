import './NotFound.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'

export const NotFound = () => {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>LuisMi • 404</title>
                <meta name="description" content="Page not found" />
            </Helmet>
            <div className='NotFound'>
                <div className='NotFound-wrapper'>
                    <h1 className="NotFound-h1">{t('NotFoundtext')}</h1>
                    <Link className='NotFound-button' to='/'>{t('NotFoundButton')}</Link>
                </div>
            </div>
        </>
    )
}
