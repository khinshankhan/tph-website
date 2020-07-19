import React, { FC } from "react"

import { AmaArchivesSidebar } from "../../components/AmaArchivesSidebar"
import { ColumnLayout } from "../ColumnLayout"

export const AmaArchivesLayout: FC = ({ children }) => {
  return (
    <ColumnLayout
      title="AMA Archives"
      sidebar={AmaArchivesSidebar}
      content={children}
    />
  )
}
