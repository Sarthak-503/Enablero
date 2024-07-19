import portfolioImage from '@/assets/png/portfolioDemo1.png';

export const portfolioContent = {
  heroSection: {
    sectionTitle: 'HERO_SECTION_TITLE',
    sectionSubtitle: 'HERO_SECTION_SUBTITLE',
  },
  mainContent: {
    projects: {
      filterButtons: [
        { id: 1, label: 'TAG_ALL' },
        { id: 2, label: 'TAG_ANDROID' },
        { id: 3, label: 'TAG_IOS' },
        { id: 4, label: 'TAG_WEB' },
        { id: 5, label: 'TAG_AI' },
      ],
      projectInformation: [
        {
          id: 1,
          tag: 'TAG_ANDROID',
          title: 'STUDENT_COUNSELLING_PORTAL_TITLE',
          description: 'STUDENT_COUNSELLING_PORTAL_DESCRIPTION',
          portfolioImage: portfolioImage,
          clientlogo:
            'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
        },
        {
          id: 2,
          tag: 'TAG_IOS',
          title: 'TEACHER_COUNSELLING_PORTAL_TITLE',
          description: 'TEACHER_COUNSELLING_PORTAL_DESCRIPTION',
          portfolioImage: portfolioImage,
          clientlogo:
            'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
        },
        {
          id: 3,
          tag: 'TAG_WEB',
          title: 'PRINCIPAL_COUNSELLING_PORTAL_TITLE',
          description: 'PRINCIPAL_COUNSELLING_PORTAL_DESCRIPTION',
          portfolioImage: portfolioImage,
          clientlogo:
            'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
        },
      ],
    },
  },
};
