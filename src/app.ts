import http from 'http';

const products = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    name: 'Product 0',
    price: 9.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    name: 'Product 1',
    price: 10.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    name: 'Product 2',
    price: 20.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    name: 'Product 3',
    price: 30.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440004',
    name: 'Product 4',
    price: 40.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440005',
    name: 'Product 5',
    price: 50.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440006',
    name: 'Product 6',
    price: 60.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440007',
    name: 'Product 7',
    price: 70.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440008',
    name: 'Product 8',
    price: 80.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440009',
    name: 'Product 9',
    price: 90.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-44665544000a',
    name: 'Product 10',
    price: 100.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-44665544000b',
    name: 'Product 11',
    price: 110.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-44665544000c',
    name: 'Product 12',
    price: 120.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-44665544000d',
    name: 'Product 13',
    price: 130.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-44665544000e',
    name: 'Product 14',
    price: 140.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-44665544000f',
    name: 'Product 15',
    price: 150.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440010',
    name: 'Product 16',
    price: 160.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440011',
    name: 'Product 17',
    price: 170.99,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440012',
    name: 'Product 18',
    price: 180.99,
  },
];

const app = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/products') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  }
});

export { app };
