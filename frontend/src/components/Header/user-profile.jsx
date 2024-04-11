import { UserProfile } from "@clerk/clerk-react"
import { SearchBar } from "./SearchBar"
import Logo from "./logo"

export default function UserProfilePage() {
  return (
    <div>

      <div className="flex mt-[20px] ml-[20px]">

        <div className="mt-[30px] ml-[40px] font-Spirax absolute text-[20pt] px-[10px] border border-[#000] rounded-[7px]">CeylonVibes</div>

        <div className="w-[240px] h-[1400px] mr-[10px] rounded-[7px] bg-[#ebebeb]">

          <div className="mx-auto mt-[130px] pt-[13px] w-[200px] h-[50px] text-center rounded-[7px] bg-[#fff09a]">DASHBOARD</div>
          <div className="mx-auto mt-[18px] pt-[13px] w-[200px] h-[50px] text-center rounded-[7px] bg-[#ddc43a]">PROFILE</div>
          <div className="mx-auto mt-[18px] pt-[13px] w-[200px] h-[50px] text-center rounded-[7px] bg-[#fff09a]">SETTINGS</div>

        </div>

        <div className="w-[1090px]">
          <div className="h-[90px] flex bg-[#ebebeb] rounded-[7px]">
            <div className="pt-[20px] pl-[40px] text-[12pt]">
              <div className="">Pages / PROFILE</div>
              <div className="font-bold">PROFILE</div>
            </div>
            <div className="pt-[20px] pl-[370px]"><SearchBar /></div>
          </div>
          <div className="mt-[10px] border bg-[#ebebeb] rounded-[7px] pl-[70px] pt-[40px] h-[1470px]">
            <UserProfile appearance={{
              variables: {
                colorPrimary: "#edac12",
                colorTextOnPrimaryBackground: "black",
                colorText: "black"
              }
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}