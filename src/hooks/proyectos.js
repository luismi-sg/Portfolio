import { useTranslation } from 'react-i18next';

const useListProjects = () => {
    const { t } = useTranslation();
    return t("listProjects", { returnObjects: true });
};

export default useListProjects;
