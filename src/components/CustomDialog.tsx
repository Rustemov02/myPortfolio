import { Dialog, Flex } from "@radix-ui/themes";
import Button from "./Button";
import { ExternalLink, Github, X } from "lucide-react";
import Badge from "./Badge";
import type { Project } from "../pages/Projects";
interface CustomDialogProps {
  data: Project;
  open: boolean;
  onOpenChange: () => void;
}

const CustomDialog = ({ open, onOpenChange, data }: CustomDialogProps) => {
  if (!data) return;
  const { title, longDescription, image, liveUrl, githubUrl } = data;
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Content
        maxWidth="450px"
        maxHeight="90vh"
        className="p-0! bg-black! space-y-5 overflow-y-auto"
      >
        <div className="relative">
          {" "}
          <img
            src={image}
            alt="headImg"
            className="w-full max-h-[250px] object-cover"
          />
          <div className="absolute inset-0 h-[20%] bg-linear-to-b from-black/80 to-black/0 pointer-events-none" />
          <X
            onClick={() => onOpenChange()}
            className="absolute top-3 right-3 cursor-pointer text-white/80 w-6 h-6"
          />
        </div>

        <Flex direction="column" gap="3" className="px-3">
          <p className="text-purple-500 text-[24px]">{title}</p>
          <p className="text-white/70">{longDescription}</p>

          <div className="space-y-6 mb-6">
            {/* Tech Stack */}
            <div>
              <h4 className="mb-3 text-white/90">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {data?.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="rounded-lg p-1 px-3 bg-linear-to-r text-[12px] from-purple-500/20 to-cyan-500/20 border-white/10 text-white"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4">
              {liveUrl && (
                <Button
                  className="cursor-pointer flex-1 py-2 outline-none rounded-lg flex items-center justify-center bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 border-0"
                  onClick={() => window.open(liveUrl, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </Button>
              )}
              {githubUrl && (
                <Button
                  // variant="outline"
                  className="cursor-pointer flex-1 py-2 outline-none rounded-lg flex items-center justify-center bg-white/5 border-white/10 hover:bg-white/10 text-white"
                  onClick={() => window.open(githubUrl, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              )}
            </div>
          </div>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CustomDialog;
