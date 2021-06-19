// import photos from '../pages/Album/album';

// for (let i = 0; i < photos.length; i += 1) {
// 	it(`photos[${i}] should have properties (author, author_id, date_taken, description, link, media, published, tags, title)`, () => {
// 		expect(photos[i]).toHaveProperty('author');
// 		expect(photos[i]).toHaveProperty('author_id');
// 		expect(photos[i]).toHaveProperty('date_taken');
// 		expect(photos[i]).toHaveProperty('description');
// 		expect(photos[i]).toHaveProperty('link');
// 		expect(photos[i]).toHaveProperty('media');
// 		expect(photos[i]).toHaveProperty('published');
// 		expect(photos[i]).toHaveProperty('tags');
// 		expect(photos[i]).toHaveProperty('title');
// 	});
// }
global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ data: {} }),
	})
);

beforeEach(() => {
	fetch.mockClear();
});

const users = [
	{
		author: 'nobody@flickr.com ("SScreativeImage")',
		author_id: '143354679@N04',
		date_taken: '2021-02-26T20:11:43-08:00',
		description:
			' <p><a href="https://www.flickr.com/people/sonisharma/">SScreativeImage</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/sonisharma/51242929647/" title="Backlight"><img src="https://live.staticflickr.com/65535/51242929647_f3010fff0a_m.jpg" width="240" height="160" alt="Backlight" /></a></p> <p>Poppy flowers in backlight</p>',
		link: 'https://www.flickr.com/photos/sonisharma/51242929647/',
		media: { m: 'https://live.staticflickr.com/65535/51242929647_f3010fff0a_m.jpg' },
		published: '2021-06-13T08:37:28Z',
		tags: 'commonpoppy cornpoppy redpoppypapaverrhoeas poppyflowersinbacklight angiosperm angiosperms back backlight backlighting backlit bloom blooming blossom blossoms corn dicots dicotyle dicotyledonous european flora flourishing flower flowering flowers format frontlighting horizontallight native nature papaveraceae photo photograph photographs photos plant plants poisonous poppies poppy red toxic undefined weed weeds wild',
		title: 'Backlight',
	},
	{
		author: 'nobody@flickr.com ("maineman152 (Lou)")',
		author_id: '21043193@N06',
		date_taken: '2021-06-05T19:04:07-08:00',
		description:
			' <p><a href="https://www.flickr.com/people/21043193@N06/">maineman152 (Lou)</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/21043193@N06/51228811070/" title="2021-0605Undefined0002"><img src="https://live.staticflickr.com/65535/51228811070_cfe91f6514_m.jpg" width="240" height="160" alt="2021-0605Undefined0002" /></a></p> <p>Cornish, Maine.<br /> <br /> The clouds where very undefined today because of the milky sky and heat haze.</p>',
		link: 'https://www.flickr.com/photos/21043193@N06/51228811070/',
		media: { m: 'https://live.staticflickr.com/65535/51228811070_cfe91f6514_m.jpg' },
		published: '2021-06-06T02:37:36Z',
		tags: 'cornishmaine clouds undefined haze heathaze milkysky hotweather nature naturephoto naturephotography june spring maine',
		title: '2021-0605Undefined0002',
	},
];

test('we should have ids 143354679@N04 and 21043193@N06', () => {
	expect(users).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ author_id: '143354679@N04' }),
			expect.objectContaining({ author_id: '21043193@N06' }),
		])
	);
});

for (let i = 0; i < users.length; i += 1) {
	it(`users[${i}] should have properties (author, author_id, date_taken, description, link, media, published, tags, title)`, () => {
		expect(users[i]).toHaveProperty('author');
		expect(users[i]).toHaveProperty('author_id');
		expect(users[i]).toHaveProperty('date_taken');
		expect(users[i]).toHaveProperty('description');
		expect(users[i]).toHaveProperty('link');
		expect(users[i]).toHaveProperty('media');
		expect(users[i]).toHaveProperty('published');
		expect(users[i]).toHaveProperty('tags');
		expect(users[i]).toHaveProperty('title');
	});
}
