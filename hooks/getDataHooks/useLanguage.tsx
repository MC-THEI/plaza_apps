import { useAppSelector } from '../../store/redux/store';

const useLanguage = () => {
  const {
    currentLanguage,
    isOpenMenu,
  }: { currentLanguage: number; isOpenMenu: boolean } = useAppSelector(
    (state) => state.language
  );

  return { currentLanguage, isOpenMenu };
};

export default useLanguage;
