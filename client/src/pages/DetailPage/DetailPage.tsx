import userExampleImage from '../../assets/Image/user-example.png';
import { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody, Button } from '@material-tailwind/react';
import { BsChevronDown } from 'react-icons/bs';

export default function DetailPage() {
  const [openAcc1, setOpenAcc1] = useState(true);
  const [openAcc2, setOpenAcc2] = useState(true);
  const [openAcc3, setOpenAcc3] = useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

  return (
    <>
      <div className="m-5 my-10">
        <div className="flex flex-row items-center gap-6">
          <img
            src={userExampleImage}
            className="border rounded-full w-14 h-14 border-mint-2"
            alt="프로필이미지"
          ></img>
          <div className="flex flex-col gap-2">
            <p className="ml-3 text-2xl">홍길동</p>
            <div className="font-normal text-[#8E98A8] text-xs ml-[43px] mt-[-10px]">강사님</div>
          </div>
        </div>
        <div className="flex justify-end gap-5 m-10 mt-5">
          <div className="flex items-center justify-center text-sm rounded-lg h-7 w-14 bg-mint-3">
            온라인
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <div className="flex items-center justify-center gap-2 p-2 text-sm font-bold text-black border-2 rounded-xl h-9 basis-1/5 border-mint-2">
            과목
          </div>
          <div className="right-0 flex flex-wrap gap-4 text-xs basis-3/5">
            <div className="flex justify-center h-8 gap-1 font-bold w-[45px] p-2 text-black bg-mint-2 rounded-xl">
              국어
            </div>
            <div className="flex justify-center h-8 gap-1 font-bold w-[45px] p-2 text-black bg-mint-2 rounded-xl">
              수학
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 mt-4 mb-10">
          <div className="flex items-center justify-center gap-2 p-2 text-sm font-bold text-black border-2 rounded-xl h-9 basis-1/5 border-mint-2">
            지역
          </div>
          <div className="right-0 flex flex-wrap gap-4 text-xs basis-3/5">
            <div className="flex justify-center h-8 gap-1 font-bold w-[45px] p-2 text-black bg-mint-2 rounded-xl">
              서울
            </div>
            <div className="flex justify-center h-8 gap-1 font-bold w-[45px] p-2 text-black bg-mint-2 rounded-xl">
              강남
            </div>
            <div className="flex justify-center h-8 gap-1 font-bold w-[45px] p-2 text-black bg-mint-2 rounded-xl">
              제주
            </div>
          </div>
        </div>
        <div className="mb-10 border-b-2 border-grey-1"></div>
        <>
          <Accordion open={openAcc1} className="px-5">
            <AccordionHeader onClick={handleOpenAcc1} className="my-4 text-sm font-semibold">
              자기소개
            </AccordionHeader>
            <AccordionBody className="text-xs font-normal leading-5 text-black">
              저는 서울대학교 수학과를 졸업했으며, 10년 이상 입시 학원 및 개인 지도를 해온 경력을
              가지고 있습니다. 초등 및 중학수학을 비롯한 수학의 기초다지기, 고등수학 및 심화학습,
              내신 대비, 수능시험을 준비를 위한 타켓 수업등을 폭넓게 진행하고 있습니다.
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc2} className="px-5">
            <AccordionHeader onClick={handleOpenAcc2} className="my-4 text-sm font-semibold">
              수업설명
            </AccordionHeader>
            <AccordionBody className="text-xs font-normal leading-5 text-black">
              초등학생, 중학생 기초 수업은 내신 진행시 1회 3시간으로 수업하며 9시 이후에는 수업하지
              않습니다. 레벨 테스트는 무료로 진행합니다. 고3의 수능대비반의 경우는 족집게 문제풀이
              과정이 별도로 있으며, 시간당 2만원의 추가비용이 있습니다. (교재제공) 물리 수업은
              팀으로 진행하며, 현재 진행중인 팀에 합류하기 위해서는 별도의 테스트를 진행하여야
              합니다. 테스트 비용이 있으며 수강시에 수강료에 산입하여 정산하여 드립니다.
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc3} className="px-5">
            <AccordionHeader onClick={handleOpenAcc3} className="my-4 text-sm font-semibold">
              학력 및 경력
            </AccordionHeader>
            <AccordionBody className="text-xs font-normal leading-5 text-black">
              서울대학교 수학과를 졸업하였으며, 통계 및 해석학 부분의 석사학위를 받았습니다. 현재는
              박사 과정을 진행하고 있습니다. 엠베스트 중학수학 부분의 강의를 진행하였으며,
              공통수학과 미적분에 대한 보조강의도 진행하였습니다. ‘태풍’ 학원의 대치점과 목동점에서
              2년간 고3 수능 만점반의 강의를 진행했습니다. 이외에도 다수의 개인과외 경험이 있습니다.
            </AccordionBody>
          </Accordion>
        </>
        <>
          <p className="m-5 text-sm mt-[40px]">수업 가능 시간</p>
          <div className="flex flex-col items-center justify-center gap-5">
            <Button
              className="flex items-center justify-between p-2 text-sm font-bold text-black bg-mint-4 rounded-xl w-[230px] border-mint-2"
              size="sm"
            >
              <span className="flex-1 text-center">날짜 선택</span>
              <BsChevronDown className="ml-auto" />
            </Button>
            <div className="h-[150px] w-[230px] bg-mint-4">달력 자리</div>
            <div>
              <Button
                className="mb-5 flex items-center justify-between p-2 text-sm font-bold text-black bg-mint-2 rounded-xl w-[230px] border-mint-2"
                size="sm"
              >
                <span className="flex-1 text-center">17:00 ~ 18:00</span>
              </Button>
              <Button
                className="flex items-center justify-between p-2 text-sm font-bold text-black bg-mint-2 rounded-xl w-[230px] border-mint-2"
                size="sm"
              >
                <span className="flex-1 text-center">18:00 ~ 19:00</span>
              </Button>
            </div>
          </div>
        </>
      </div>
      <div className="fixed bottom-5 h-[50px] flex items-center justify-between px-5 w-[375px] bg-[#008774]">
        <div className="text-sm text-white">1회 50,000원 / 1시간</div>
        <Button className="h-10 text-sm">강의신청하기</Button>
      </div>
    </>
  );
}
