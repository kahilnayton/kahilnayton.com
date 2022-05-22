/* new file: src/pages/[locale]/tutorials/[slug].tsx */

import React from 'react'
import ErrorPage from 'next/error'
import { getContentModel } from '@/utils/contentful'

export type GetContentModelParams = {
  isPreview?: boolean
  env?: string
  locale?: string

  slug?: string
  contentType?: string
  queryParams?: { [key: string]: string | number }
}

const Tutorial = ({ page }: { page: any }) => {
  if (!page) {
    //getServerSideProps did not find the page
    return <ErrorPage statusCode={404} />
  }

  const { difficulty, timeRequired, explanation, repoLink } = page.fields

  console.log('page')

  return (
    <>
      <div className="container w-full flex flex-wrap mx-auto max-w-screen-xl p-8 pb-16 lg:pb-24">
        <div className="w-full px-5 text-xl text-gray-800 leading-normal">
          <span className="text-sm font-medium py-2 lg:pb-4 text-gray-700 tracking-wide uppercase">
            Tutorial
          </span>
          <div className="flex flex-row justify-between">
            <div>
              <h1>
                {page.fields.title}
                {/*Turn difficulty into a 3-dots rating*/}
                <ColorRating value={difficulty} />
              </h1>
              <span className="text-sm font-medium py-2 lg:pb-4 text-gray-500 tracking-wide">
                <TimeIcon /> {timeRequired} minute
                {timeRequired !== 1 ? 's' : ''}
              </span>
            </div>

            {/*Display a link to the code repo if any*/}
            {repoLink ? (
              <div>
                <a
                  href={repoLink}
                  className="bg-blue-700 text-white p-2 block rounded text-base"
                >
                  <BeakerIcon /> Open repository
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default Tutorial

export const getServerSideProps = async (params: GetContentModelParams) => {
  const page = await getContentModel({
    ...params,
  })
  return {
    props: { page },
  }
}

/* Cosmetic component */
const TimeIcon = () => (
  <svg
    className="w-6 h-6 inline"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
)
/* Cosmetic component */
const BeakerIcon = () => (
  <svg
    className="w-6 h-6 inline"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    ></path>
  </svg>
)
/* Cosmetic component */
const ColorRating = (props: { value: number }) => {
  const style = {
    backgroundColor: ['#2dce89', '#11cdef', '#fb6340'][props.value - 1],
    width: '0.6em',
    height: '0.6em',
  }

  return (
    <>
      {Array(props.value).fill(
        <span style={style} className="inline-block ml-1" />,
      )}
    </>
  )
}
