import {
	Container,
	Filters,
	ProductsGroupList,
	TopBar,
} from '@/components/shared'

export default function Catalog() {
	return (
		<div className='flex flex-col gap-6'>
			<TopBar />

			<Container>
				<div className='flex gap-6'>
					{/* Фильтрация */}
					<div className='w-[282px]'>
						<Filters />
					</div>

					{/* Список товаров */}
					<div className='flex-1'>
						<div className='flex flex-col'>
							<ProductsGroupList
								items={[
									{
										id: 1,
										name: 'Чокер черный из хрусталя и гематита',
										imageUrl: '/card1.svg',
										price: 1700,
									},
									{
										id: 2,
										name: 'Чокер черный из хрусталя и гематита',
										imageUrl: '/card1.svg',
										price: 1700,
									},
									{
										id: 3,
										name: 'Чокер черный из хрусталя и гематита',
										imageUrl: '/card1.svg',
										price: 1700,
									},
									{
										id: 4,
										name: 'Чокер черный из хрусталя и гематита',
										imageUrl: '/card1.svg',
										price: 1700,
									},
									{
										id: 5,
										name: 'Чокер черный из хрусталя и гематита',
										imageUrl: '/card1.svg',
										price: 1700,
									},
									{
										id: 6,
										name: 'Чокер черный из хрусталя и гематита',
										imageUrl: '/card1.svg',
										price: 1700,
									},
									{
										id: 7,
										name: 'Чокер черный из хрусталя и гематита',
										imageUrl: '/card1.svg',
										price: 1700,
									},
								]}
								categoryId={1}
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
