import { Carousel, Image } from 'antd'
import { useRequest } from 'ahooks'
import { bannerList } from '@/api/findMusic'
import { useImmer } from 'use-immer'
import './recommend.less'
async function getBannerList() {
  return bannerList()
}
export default function Recommend() {
  const [bannerList, setBannerList] = useImmer([])
  const { data, error } = useRequest(getBannerList, {
    onSuccess: (res) => {
      console.log('bannerdata--->', res);

      if (error) {
        message.error(error.message)
      }
      if (res?.code == 200) {
        setBannerList(res.banners)
      } else {
        setBannerList([])
      }
    }
  })
  return (
    <div className='recommendContainer'>
      <Carousel autoplay>
        {
          bannerList.map(item => (
            <Image
              key={item.targetId}
              src={item.imageUrl}
              width='100%'
              height={240}
              preview={false}
            />
          ))
        }
      </Carousel>
    </div>
  )
}
