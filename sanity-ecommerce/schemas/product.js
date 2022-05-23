export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  initialValue: {
    au: 'N/A',
    eu: 'N/A',
    jp: 'N/A',
    na: 'N/A',
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: { hotspot: true },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'character',
      title: 'Character',
      type: 'string',
    },
    {
      name: 'amiiboSeries',
      title: 'Amiibo Series',
      type: 'string',
    },
    {
      name: 'gameSeries',
      title: 'Game Series',
      type: 'string',
    },
    {
      name: 'au',
      title: 'AU Release',
      type: 'string',
    },
    {
      name: 'eu',
      title: 'EU Release',
      type: 'string',
    },
    {
      name: 'jp',
      title: 'JP Release',
      type: 'string',
    },
    {
      name: 'na',
      title: 'NA Release',
      type: 'string',
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'id',
        maxLength: 90,
      },
    },
    { name: 'price', title: 'Price', type: 'number' },
  ],
};
