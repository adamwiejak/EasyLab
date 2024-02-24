import Card from "@mui/material/Card";
import MuiTab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import type { TabsProps } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

interface IAnalysisHomeHeader extends TabsProps {
  tabs: AnalysisTab[];
}

const AnalysisHomeHeader: React.FC<IAnalysisHomeHeader> = (props) => {
  const { tabs, onChange, ...rest } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const onOpenTab = (value: string) => () => setSearchParams({ tab: value });

  useEffect(() => {
    if (!searchParams.get("tab")) setSearchParams({ tab: tabs[0].param });
  });

  return (
    <Card square elevation={24}>
      <Tabs
        {...rest}
        value={searchParams.get("tab") || false}
        variant="scrollable"
      >
        {tabs.map(({ title, param }) => (
          <MuiTab
            key={param}
            value={param}
            label={title}
            onClick={onOpenTab(param)}
          />
        ))}
      </Tabs>
    </Card>
  );
};

export default AnalysisHomeHeader;
