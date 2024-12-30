import './NotFound.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NotFound = () => {

    const { t } = useTranslation();

    return (
        <div className='NotFound'>
            <div className='NotFound-wrapper'>
                <h1 className="NotFound-h1">{t('NotFoundtext')}</h1>
                <Link className='NotFound-button' to='/'>{t('NotFoundButton')}</Link>
            </div>
        </div>
    )
}
